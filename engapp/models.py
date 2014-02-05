from django.db import models
from django.utils import timezone


class accounts(models.Model):
        uid = models.IntegerField()
        pro    = models.TextField()
        badge = models.TextField()
        playtimes = models.IntegerField()
        others  = models.TextField()
        def __unicode__(self):
                return u'%s' % (self.uid)
        class Meta:
                ordering = ['uid']

class timeline(models.Model):
    persona = models.ForeignKey(accounts)
    scores=models.TextField()

    def __unicode__(self):
        return u'%s %s' % (self.persona, self.scores)