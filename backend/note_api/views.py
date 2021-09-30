from rest_framework.decorators import api_view
from rest_framework.response import Response

from note_api.models import Note
from note_api.serializers import NoteSerializers


@api_view(['GET'])
def get_routes(request):

    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes)


@api_view(['GET'])
def get_note_list(request):
    note_list = Note.objects.all().order_by('updated_at')
    serializer = NoteSerializers(note_list, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_note_detail(request, pk):
    note= Note.objects.get(pk=pk)
    serializer = NoteSerializers(note, many=False)
    return Response(serializer.data)
