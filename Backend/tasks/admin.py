from django.contrib import admin

from .models import Usuario, Produto, Carrinho, Pedido
    
# Register your models here.
admin.site.register(Usuario)
admin.site.register(Produto)
admin.site.register(Carrinho)
admin.site.register(Pedido)
