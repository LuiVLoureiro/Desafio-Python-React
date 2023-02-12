from rest_framework import mixins, generics, permissions, status
from rest_framework.response import Response

from .models import Usuario, Produto, Carrinho
from .serializers import UsuarioSerializer, ProdutoSerializer, CarrinhoSerializer

class UsuarioListAPIView(generics.ListAPIView):
    serializer_class = UsuarioSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Usuario.objects.all()

class ProdutoListAPIView(generics.ListAPIView):
    serializer_class = ProdutoSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Produto.objects.all()

class CarrinhoListAPIView(generics.ListAPIView):
    serializer_class = CarrinhoSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Carrinho.objects.all()

    def post(self, request):
        serializer = CarrinhoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

