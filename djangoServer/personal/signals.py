from django.db.models.signals import pre_save
from django.dispatch import receiver
from .models import Personal
from django.utils import timezone


@receiver(pre_save, sender=Personal)
def update_dismissal_date(sender, instance, **kwargs):
    if instance.is_dismissed and not instance.dismissal_date:
        instance.dismissal_date = timezone.now().date()
    elif not instance.is_dismissed and instance.dismissal_date:
        instance.dismissal_date = None