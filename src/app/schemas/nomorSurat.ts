export default [
    {
        header: 'Id',
        field: 'id', 
        type: 'text',
        width: 500,
        readOnly: true
    },
    {
        header: 'Format',
        field: 'format', 
        type: 'text',
        width: 400,
        readOnly: true
    },
    {
        header: 'Counter',
        field: 'counter', 
        type: 'numeric',
        width: 100,
        readOnly: true
    },
    {
        header: 'Jenis Counter',
        field: 'counterType', 
        type: 'text',
        width: 400,
        readOnly: true
    },
    {
        header: 'Counter Terakhir',
        field: 'lastCounter', 
        dateFormat: 'DD/MM/YYYY',
        datePickerConfig: {yearRange: 50},
        correctFormat: true,
        defaultDate: '01/01/1900',
        width: 120
    }
]