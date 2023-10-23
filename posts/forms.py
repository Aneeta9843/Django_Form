from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        models = Post
        field = '__all__'

    