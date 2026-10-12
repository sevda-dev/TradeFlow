from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import QuoteSerializer


class QuoteView(APIView):

    def post(self, request):
        serializer = QuoteSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                {
                    "message": "درخواست شما با موفقیت ثبت شد.",
                    "data": serializer.data,
                },
                status=status.HTTP_201_CREATED,
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST,
        )
