from django.db import models

class Usuario(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=255)
    senha = models.CharField(max_length=255)
    endereco = models.CharField(max_length=255)

    def __str__(self):
        return self.nome

class Produto(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=255)
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    popularidade = models.IntegerField()
    descricao = models.CharField(max_length=255)

    def __str__(self):
        return self.nome

class Carrinho(models.Model):
    id = models.AutoField(primary_key=True)
    usuarioid = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    produtoid = models.ForeignKey(Produto, on_delete=models.CASCADE)
    quantidade = models.IntegerField()
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)
    frete = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return str(self.id)

class Pedido(models.Model):
    id = models.AutoField(primary_key=True)
    usuarioid = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    produtoid = models.ForeignKey(Produto, on_delete=models.CASCADE)
    quantidade = models.IntegerField()
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)
    frete = models.DecimalField(max_digits=10, decimal_places=2)
    data = models.DateField()

    def __str__(self):
        return str(self.id)