from note_api.models import Note
from rest_framework.serializers import ModelSerializer


class NoteSerializers(ModelSerializer):
    class Meta:
        model = Note
        fields = ['body', 'updated_at']
