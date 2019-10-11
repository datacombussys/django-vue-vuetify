from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.

class BlogModel(models.Model):
	author = models.ForeignKey(User, on_delete=models.CASCADE)
	title = models.CharField(max_length=100, null=False)
	content = models.TextField()
	date_posted = models.DateTimeField(default=timezone.now)
	last_updated = models.DateTimeField(auto_now=True)
	slug = models.SlugField(max_length=50)
	blog_title_image = models.FileField(upload_to='uploads', blank='True')