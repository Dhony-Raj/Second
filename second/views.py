from django.shortcuts import render, HttpResponse,redirect
from .models import Category

def index(request):
    category = Category.objects.all().order_by('-id')
    cat_data = {'data':category}
    return render(request, 'admin/category.html', cat_data) 

def index1(request):
    cat_num = request.POST.get('cat_num')

    cat_obj = Category()
    cat_obj.cat_num = cat_num

    cat_obj.save()

    return redirect('home')

def edit_index(request,id):
    
    cat_obj = Category.objects.get(id=id)
    single_cat = {'cat_data':cat_obj,'id':id}
    return render(request,'admin/cat_edit.html',single_cat)

def update(request):
    cat_num = request.POST.get('cat_num') 
    cat_id = request.POST.get('cat_id')

    cat_obj = Category.objects.get(id=cat_id)
    cat_obj.cat_num = cat_num

    cat_obj.save()

    return redirect('home')

def delete(request,id):
    cat_obj = Category.objects.get(id=id)
    cat_obj.delete()

    return redirect('home')

