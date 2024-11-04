from rest_framework import generics
from .models import Personal
from .serializers import PersonalSerializer


class PersonalList(generics.ListAPIView):
    serializer_class = PersonalSerializer

    def get_queryset(self):
        queryset = Personal.objects.all()
        is_dismissed = self.request.query_params.get('is_dismissed', None)
        if is_dismissed is not None:
            if is_dismissed.lower() == 'true':
                queryset = queryset.filter(is_dismissed=True)
            elif is_dismissed.lower() == 'false':
                queryset = queryset.filter(is_dismissed=False)
        return queryset
