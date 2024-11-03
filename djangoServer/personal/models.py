from django.db import models


class Position(models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title


class Personal(models.Model):
    full_name = models.CharField(max_length=255, verbose_name="ФИО")
    position = models.ForeignKey(Position, on_delete=models.SET_NULL, null=True,
                                 verbose_name="Должность")
    is_dismissed = models.BooleanField(default=False, verbose_name="Уволен")
    dismissal_date = models.DateField(null=True, blank=True,
                                      verbose_name="Дата увольнения")

    def __str__(self):
        return self.full_name

    class Meta:
        verbose_name = "Сотрудник"
        verbose_name_plural = "Сотрудники"
