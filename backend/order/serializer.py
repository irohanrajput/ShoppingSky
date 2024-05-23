from rest_framework import serializers
from .models import Order, OrderItem

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['product', 'quantity']
        
class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True) #notes: 1
    
    class Meta:
        model = Order
        fields = ['user', 'items']
        read_only_fields = ['user']
        
    def create(self, validated_data):
        items_data = validated_data['items'] 
        validated_data.pop('items')
        new_order = Order.objects.create(**validated_data)
        
        for item_data in items_data:
            new_product = item_data['product']
            new_quantity = item_data['quantity']
            order_item = OrderItem.objects.create(order=new_order, product=new_product, quantity=new_quantity)
            
        return new_order
                