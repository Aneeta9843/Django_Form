from django.db import models

# Create your models here.
class Post(models.Model):
    class Meta(object):
        db_table = 'post'

    name = models.CharField(
        'Name', blank=False, null=False, max_length=14, db_index=True, default='Anonymous'
    )
    body = models.CharField(
        'body', blank=False, null=False, max_length=140, db_index=True 
    )
    created_at = models.DateTimeField(
        'Created DateTime', blank=False, auto_now_add=True
    )