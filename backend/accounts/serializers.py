from django.contrib.auth import authenticate
from rest_framework import serializers


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(
        write_only=True,
        trim_whitespace=False
    )

    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")

        user = authenticate(
            request=self.context.get("request"),
            username=email,
            password=password,
        )

        if not user:
            raise serializers.ValidationError(
                "ایمیل یا رمز عبور اشتباه است."
            )

        if not user.is_active:
            raise serializers.ValidationError(
                "این حساب کاربری غیرفعال است."
            )

        attrs["user"] = user
        return attrs
