from django.shortcuts import render

# Create your views here.
def login(request):
    context = {'lang':"ar"}
    return render(request, 'login.html', context)

def home(request):
    context = {'lang':"ar"}
    return render(request, 'home.html', context)