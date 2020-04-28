from rest_framework import viewsets
from rest_framework.response import Response

from api.serializers import ItemSerializer
from api.models import Item


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

    def list(self, request, *args, **kwargs):
        items = Item.objects.all()
        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data)
