from rest_framework import mixins, generics, permissions

from .models import Usuario, Produto
from .serializers import UsuarioSerializer, ProdutoSerializer

class UsuarioListAPIView(generics.ListAPIView):
    serializer_class = UsuarioSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Usuario.objects.all()

class ProdutoListAPIView(generics.ListAPIView):
    serializer_class = ProdutoSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Produto.objects.all()