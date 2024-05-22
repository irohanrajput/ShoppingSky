from django.db import models
from users.models import CustomUser

User = CustomUser

class Category(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=500, blank=True)
    
    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.title
    

class Product(models.Model):
    seller = models.ForeignKey(User, on_delete=models.CASCADE,)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=500, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    image = models.ImageField(upload_to='products/static/images/products/', blank=True, null=True)
    
    def __str__(self):
        return self.title
    
