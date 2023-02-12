from django.urls import path

from . import views

app_name = 'tasks'

urlpatterns = [
    path('tasks/usuariodb/', views.UsuarioListAPIView.as_view(),
        name='usuario-list'),
        
    path('tasks/produtodb/', views.ProdutoListAPIView.as_view(),
        name='produto-list'),
    
    path('tasks/carrinhodb/', views.CarrinhoListAPIView.as_view(), 
    name='carrinho-list')


]