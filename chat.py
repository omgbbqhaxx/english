#!/usr/bin/env python
#-*- coding: utf-8 -*-
import os
import uuid
import redis
import tornadoredis
import tornadoredis.pubsub
import json
import tornado.httpserver
import tornado.ioloop
import tornado.web
import tornado.websocket
import tornado.template
import tornado.gen
import tornado.wsgi
from chatsocial.wsgi import application as wsgi_handler 
r = redis.StrictRedis(host='localhost', port=6379, db=0)
uniqueid = uuid.uuid4()

try:
    import sockjs.tornado
except:
    print "Please install the sockjs-tornado package to run this demo."
    exit(1)

redis_client = redis.Redis()
subscriber = tornadoredis.pubsub.SockJSSubscriber(tornadoredis.Client())
class IndexPageHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html", title="PubSub + SockJS Demo")


class SendMessageHandler(tornado.web.RequestHandler):

    def _send_message(self, channel, msg_type, msg, user=None):
        self.chch = r.get(uniqueid)
        msg = {'type': msg_type,
               'msg': msg,
               'user': user}
        msg = json.dumps(msg)
        redis_client.publish(self.chch, msg)

    def post(self):
        message = self.get_argument('message')
        from_user = self.get_argument('from_user')
        to_user = self.get_argument('to_user')
        if to_user:
            self._send_message('private.{}'.format(to_user),
                               'pvt', message, from_user)
            self._send_message('private.{}'.format(from_user),
                               'tvp', message, to_user)
        else:
            self._send_message('broadcast_channel', 'msg', message, from_user)
        self.set_header('Content-Type', 'text/plain')
        self.write('sent: %s' % (message,))
class Postgre(tornado.web.RequestHandler):
    def post(self):
	   self.money= self.get_argument('xnxx')
	   r.set(uniqueid, self.money)
	   print "post is successfull nigga"


       
	
        
class MessageHandler(sockjs.tornado.SockJSConnection):
    """
    SockJS connection handler.

    Note that there are no "on message" handlers - SockJSSubscriber class
    calls SockJSConnection.broadcast method to transfer messages
    to subscribed clients.
    """
    def _enter_leave_notification(self, msg_type):
        broadcasters = list(subscriber.subscribers['broadcast_channel'].keys())
        message = json.dumps({'type': msg_type,
                              'user': self.user_id,
                              'msg': '',
                              'user_list': [{'id': b.user_id,
                                             'name': b.user_name}
                                            for b in broadcasters]})
        if broadcasters:
            broadcasters[0].broadcast(broadcasters, message)

    def _send_message(self, msg_type, msg, user=None):
        if not user:
            user = self.user_id
        self.send(json.dumps({'type': msg_type,
                              'msg': msg,
                              'user': user}))

    def on_open(self, request):
        # Generate a user ID and name to demonstrate 'private' channels
        self.user_id = str(uuid.uuid4())[:5]
        self.user_name = "omg"
        # Send it to user
        self._send_message('uid', self.user_name, self.user_id)
        # Subscribe to broadcast and 'private' message channels
        subscriber.subscribe([self.user_name,
                              'private.{}'.format(self.user_id)],
                             self)
        # Send the 'user enters the chat' notification
        self._enter_leave_notification('enters')

    def on_close(self):
        subscriber.unsubscribe('private.{}'.format(self.user_id), self)
        subscriber.unsubscribe('broadcast_channel', self)
        # Send the 'user leaves the chat' notification
        self._enter_leave_notification('leaves')


  
def main():
    wsgi_app = tornado.wsgi.WSGIContainer(wsgi_handler)
    application = tornado.web.Application([
      (r'/', IndexPageHandler),
      (r'/cd', Postgre),
      (r'/send_message', SendMessageHandler),
      
      ]
      + sockjs.tornado.SockJSRouter(MessageHandler, '/sockjs').urls
      +[('.*', tornado.web.FallbackHandler, dict(fallback=wsgi_app))]
      
    )
    server = tornado.httpserver.HTTPServer(application)
    server.listen(80)
    tornado.ioloop.IOLoop.instance().start()
if __name__ == "__main__":
    main()

