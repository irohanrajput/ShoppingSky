from django.urls import path
from .views import ProductListCreateView, ProductDetailView, CategoryListView, CategoryDetailView

urlpatterns = [
    path("", ProductListCreateView.as_view(), name="product-list-create"),
    path("<pk>/", ProductDetailView.as_view(), name="product-detail"),
    
    ]