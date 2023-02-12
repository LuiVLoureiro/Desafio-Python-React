from rest_framework import serializers

from .models import *

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('id', 'nome', 'senha', 'endereco',)
        read_only_fields = ('id',)

class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = ('id', 'nome', 'preco', 'popularidade', 'descricao',)
        read_only_fields = ('id',)