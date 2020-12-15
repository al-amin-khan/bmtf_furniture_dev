from django.db import models

# Create your models here.

class Category(models.Model):
    category = models.CharField(max_length=200)

    def __str__(self):
        return self.category

class Product(models.Model):
    """docstring for Product."""

    product_name = models.CharField(max_length=255)
    product_model = models.CharField(max_length=150, null=True)
    product_description = models.TextField(blank=True)
    product_dimension = models.TextField(blank=True)
    product_image = models.ImageField(upload_to='product/')
    price = models.PositiveIntegerField(null=True)
    discount_price = models.PositiveIntegerField(null=True)
    added_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.product_name
