from django.urls import path
from .views import QuoteView

urlpatterns = [
    path("quotes/", QuoteView.as_view(), name="quote-list-create"),
]
