window.addEventListener('DOMContentLoaded', function () {
    var myDatepicker = document.querySelector('input[name="demo"]')

    myDatepicker.DatePickerX.init({
        mondayFirst: true,
        format: 'dd/mm/yyyy',
        minDate: new Date(0, 0),
        maxDate: new Date(9999, 11, 31),
        weekDayLabels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
        singleMonthLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        todayButton: true,
        todayButtonLabel: 'Hoje',
        clearButton: true,
        clearButtonLabel: 'Limpar'
    });

});