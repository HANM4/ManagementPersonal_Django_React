from django.contrib import admin
from .models import Position, Personal


class PersonalAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'position', 'is_dismissed', 'dismissal_date')
    list_filter = ('is_dismissed', 'position')
    search_fields = ('full_name', 'position__title')
    list_editable = ('is_dismissed', 'dismissal_date')
    list_per_page = 20


admin.site.register(Position)
admin.site.register(Personal, PersonalAdmin)
