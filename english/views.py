#-*- coding: utf-8 -*-
from django.http import *
from django import template
from django.shortcuts import render_to_response
from django.views.decorators.csrf import csrf_exempt


def wellcome(request):
  return render_to_response('fb.html', locals())

def ch(request):
  return render_to_response('channel.html', locals())






