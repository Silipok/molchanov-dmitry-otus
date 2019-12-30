<template>
<v-container>
        <div 
            class="d-flex justify-center flex-column text-center mt-12" 
            style="text-align: center;margin-top: 24px;margin-bottom: 12px"
        >
        <p class="text--accent-1 text--darken-1 font-weight-bold" style="font-size: 24px">Привет!</p>
        <p>Добро пожаловать на 24 день вашей тренировки!</p>
        <p>Ваш последний результат - решено 18 из 25</p>
        <p>Общая точность 80%</p>
        </div>
        <v-card>
            <div class="text--accent-1 
                        text--darken-1 font-weight-bold" 
                        style="font-size: 24px">
                Настройки
            </div>
            <v-card-subtitle>Установите время!</v-card-subtitle>
            <v-card-text>
                <v-slider
                    v-model="time"
                    step="1"
                    ticks="always"
                    tick-size="5"
                    :min="1"
                    :max="15"
                    thumb-label="always"
                    :tick-labels="labelsTime"
                ></v-slider>
            </v-card-text>
            <v-card-subtitle>Установите уровень!</v-card-subtitle>
            <v-card-text>
                <v-slider
                    v-model="level"
                    step="1"
                    ticks="always"
                    tick-size="5"
                    :min="1"
                    :max="10"
                    thumb-label="always"
                    :tick-labels="labelsLevel"
                ></v-slider>
            </v-card-text>
            <v-card-text>
                <v-checkbox
                    v-model="operations.sum"
                    label="Суммирование"
                ></v-checkbox>
                <v-checkbox
                    v-model="operations.sub"
                    label="Вычитание"
                >
                </v-checkbox>
                <v-checkbox
                    v-model="operations.mul"
                    label="Умножение"
                ></v-checkbox>
                <v-checkbox
                    v-model="operations.div"
                    label="Деление"            
                ></v-checkbox>
                <v-checkbox
                    v-model="operations.sqr"
                    label="Возведение в степень"
                ></v-checkbox>
            </v-card-text>
            </v-card>
</v-container>
</template>

<script>
    export default {
        name: "hellocard",
        data(){
            return{
                time: 5,
                level: 1,
                labelsTime: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
                labelsLevel: [1,2,3,4,5,6,7,8,9,10],
                operations: {
                    sum: true,
                    div: false,
                    mul: true,
                    sub: true,
                    sqr: true
                }
            }
        },
        methods: {
            logger: function(){
                //window.console.log(this.operations);
            }
        }
    };
</script>

<style scoped>

</style>