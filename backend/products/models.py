from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=150, verbose_name="نام محصول")
    category = models.CharField(max_length=100, verbose_name="دسته‌بندی")
    description = models.TextField(verbose_name="توضیحات")
    image = models.ImageField(
        upload_to="products/",
        verbose_name="عکس محصول",
        blank=True,
        null=True,
    )
    is_active = models.BooleanField(default=True, verbose_name="فعال")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "محصول"
        verbose_name_plural = "محصولات"
