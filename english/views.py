#-*- coding: utf-8 -*-
from engapp.models import *
from django.http import *
from django import template
import json, time , redis , uuid
from django.shortcuts import render_to_response
from django.views.decorators.csrf import csrf_exempt
r = redis.StrictRedis(host='localhost', port=6379, db=0)
uniqueid = uuid.uuid4()

def zor(request):
  return render_to_response('zor.html', locals())

def ch(request):
  return render_to_response('channel.html', locals())


def wellcome(request):
  loggedin = r.get(uniqueid)
  if loggedin == None:
    return render_to_response('cookieok.html')
  else:
    mad = json.loads(loggedin)
    uid = mad['uid']
    name = mad['name']
    return render_to_response('cookieok.html', locals())


@csrf_exempt
def taker(request):
  if request.method == 'POST':
    uid = request.POST.get('uid')
    name = request.POST.get('name')
    link = request.POST.get('link')
    username = request.POST.get('username')
    email = request.POST.get('email')
    others = {"uid": uid,"name": name,"link" : link, "username": username, "email": email}
    google = json.dumps(others, sort_keys=True)
    try:
      acc=accounts.objects.get(uid=uid)
    except accounts.DoesNotExist:
      registeracc=accounts(uid=uid,pro="no",badge="no",playtimes=0,others=google)
      registeracc.save()
      r.setex(uniqueid, 3600, others)
      return HttpResponse(u'uid : %s'% uid)
    r.setex(uniqueid, 3600, google)
    return HttpResponse(u'uid2 : %s'% uid)
  else:
    return HttpResponse(u'Error')
    

@csrf_exempt
def success(request):
  uid = request.POST.get('uid')
  isim = request.POST.get('isim')
  bildin = request.POST.get('bildin')
  ogrendin = request.POST.get('ogrendin')
  if uid == None:
    return HttpResponse(u'ingilizce-kelime-ogren.com da %s kelime bildim ve %s yeni ingilizce kelime ogrendim.'% (bildin,ogrendin))
  try:
      ajj=accounts.objects.get(uid=uid)
      tl = timeline.objects.get(persona=ajj)
  except timeline.DoesNotExist:
    tldata = [[bildin, ogrendin]]
    dumptldata = json.dumps(tldata)
    registertimeline=timeline(persona=ajj,scores=dumptldata)
    registertimeline.save()
    return HttpResponse(u'%s ingilizce-kelime-ogren.com da %s kelime bildi ve %s yeni ingilizce kelime ogrendi.'% (isim,bildin,ogrendin))
  ajj=accounts.objects.get(uid=uid)
  ajj.playtimes +=1
  tl = timeline.objects.get(persona=ajj)
  scores = tl.scores
  scorelist = json.loads(scores)
  scorelist.insert(0, [bildin, ogrendin])
  scx = scorelist[0:20]
  dumpscorelist = json.dumps(scx)
  tl.scores = dumpscorelist
  tl.save()
  ajj.save()
  return HttpResponse(u'%s ingilizce-kelime-ogren.com da %s kelime bildi ve %s yeni ingilizce kelime ogrendi.'% (isim,bildin,ogrendin))



@csrf_exempt
def logout(request):
  if request.method == 'POST':
    r.delete(uniqueid)
    return HttpResponse(u'logout successfull')
  else:
    r.delete(uniqueid)
    return render_to_response('cookieok.html', locals())
  
  
def getuser(request, username):
  if request.method=='GET':
    try:
      ajj=accounts.objects.get(uid=int(username))
    except accounts.DoesNotExist:
      return HttpResponse(u'Böyle bir hesap yok')
    dogrular = []
    yanlislar = []
    uid = ajj.uid
    others = ajj.others
    istatislikler = timeline.objects.get(persona=ajj)
    statzz = istatislikler.scores
    loadstats = json.loads(statzz)
    for i in loadstats:
      dogrular.append(i[0])
      yanlislar.append(i[1])
    dr = dogrular[::-1]
    yr = yanlislar[::-1]
    dogri = map(int, dr)
    hatali = map(int, yr)
    xothers = json.loads(others)
    name = xothers["name"]
    return render_to_response('users.html', locals())
    
  
    


