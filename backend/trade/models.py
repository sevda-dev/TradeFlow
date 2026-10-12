from django.db import models


class Quote(models.Model):
    full_name = models.CharField(max_length=100)
    company_name = models.CharField(max_length=150)
    email = models.EmailField()
    country = models.CharField(max_length=100)
    product = models.CharField(max_length=100)
    quantity = models.CharField(max_length=100)
    packaging = models.CharField(max_length=200)
    destination = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.product}"
