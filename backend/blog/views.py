from .models import BlogModel
from rest_framework import viewsets
from .serializers import BlogSerializer

# Create your views here.
class BlogSet(viewsets.ModelViewSet):
	# def perform_create(self, serializer):
	# 	serializer.save(created_by=self.request.user)
	queryset = BlogModel.objects.all()
	serializer_class = BlogSerializer