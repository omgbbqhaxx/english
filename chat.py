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
from english.wsgi import application as wsgi_handler 
r = redis.StrictRedis(host='localhost', port=6379, db=0)
uniqueid = uuid.uuid4()

try:
    import sockjs.tornado
except:
    print "Please install the sockjs-tornado package to run this demo."
    exit(1)

redis_client = redis.Redis()
subscriber = tornadoredis.pubsub.SockJSSubscriber(tornadoredis.Client())



class SendMessageHandler(tornado.web.RequestHandler):
    
    def _send_message(self, channel, msg_type, dogru, hatali, link, img, user=None):
	
        msg = {'type': msg_type,
	       'link': link,
	       'img' : img,
               'dogru': dogru,
	       'hatali': hatali,
               'user': user}
        msg = json.dumps(msg)
	
        redis_client.publish(channel, msg)

    def post(self):
        self.user = self.get_argument('user')
        self.dogru = self.get_argument('dogru')
	self.hatali = self.get_argument('hatali')
	self.link = self.get_argument('link')
	self.img = self.get_argument('img')
        self._send_message('broadcast_channel', 'msg', self.dogru, self.hatali, self.link, self.img, self.user)
       


class MessageHandler(sockjs.tornado.SockJSConnection):

  

    def on_open(self, request):
        # Generate a user ID and name to demonstrate 'private' channels
        self.user_id = str(uuid.uuid4())[:5]
      
        subscriber.subscribe(['broadcast_channel',
                              'private.{}'.format(self.user_id)],
                             self)
    

    def on_close(self):
        subscriber.unsubscribe('private.{}'.format(self.user_id), self)
        subscriber.unsubscribe('broadcast_channel', self)
     
  
def main():
    wsgi_app = tornado.wsgi.WSGIContainer(wsgi_handler)
    settings = { 'static_path': os.path.join(os.path.dirname(__file__), 'english/templates/static')}
    application = tornado.web.Application([
      (r'/send_message', SendMessageHandler),
      ]
      + sockjs.tornado.SockJSRouter(MessageHandler, '/sockjs').urls
      +[('.*', tornado.web.FallbackHandler, dict(fallback=wsgi_app))]
      , **settings)
    
    server = tornado.httpserver.HTTPServer(application)
    server.listen(8888)
    tornado.ioloop.IOLoop.instance().start()
if __name__ == "__main__":
    main()

