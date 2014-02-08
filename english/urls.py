from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()
import views
urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'eng.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^logout/', views.logout),
    url(r'^success/', views.success),
    url(r'^taker/', views.taker),
    url(r'^$', views.wellcome),
    url(r'^channel/', views.ch),
    url(r'^zor-kelimeler/', views.zor),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^(?P<username>\w+)/$', views.wellcome),
    url(r'^user/(?P<username>\d+)/$', views.getuser),
)

