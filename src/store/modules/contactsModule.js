const appModule = {
  namespaced: true,
  state: () => ({
    dean: {
      img: require('../../assets/images/people/137820.jpg'),
      name: 'Капитонов Александр Александрович',
      position: 'Декан факультета',
      email: 'kapitonov.aleksandr@itmo.ru',
      tel: '+7 (812) 457-15-35'
    },
    contacts:[
      {
        img: require('../../assets/images/people/arsenieva.3be2db26674e.jpg'),
        name: 'Арсеньева Анна Закировна',
        position: 'Заместитель декана по учебному процессу',
        email: 'anna.z.arseneva@itmo.ru'
      },
      {
        img: require('../../assets/images/people/p1336.jpg'),
        name: 'Башкина Ирина Александровна',
        position: 'Помощник декана',
        email: 'bashkina@itmo.ru'
      },
      {
        img: require('../../assets/images/people/184402.jpg'),
        name: 'Кузнецов Павел Александрович',
        position: 'Ответственный за прием абитуриентов, куратор практики',
        email: 'pakuznetsov@itmo.ru'
      },
      {
        img: require('../../assets/images/people/pavlovich.eb74b9efcb8b.jpg'),
        name: 'Павлович Яна Александровна',
        position: 'Менеджер по связям с общественностью',
        email: 'yana.pavlovich@itmo.ru'
      }
    ],
    office:[
      {
        name: 'Наталья Владимировна Монахова',
        position: 'Руководитель учебного офиса',
        email: 'm.n.v@niuitmo.ru'
      },
      {
        name: 'Говорова Марина Михайловна',
        position: 'Менеджер',
        email: 'mmgovorova@itmo.ru'
      },
      {
        img: require('../../assets/images/people/246011.png'),
        name: 'Деркунская Светлана',
        position: 'Менеджер',
        email: 'sderkunskaia@itmo.ru'
      },
      {
        img: require('../../assets/images/people/larionova.44c52f8797e2.jpg'),
        name: 'Ларионова Александра Сергеевна',
        position: 'Менеджер',
        email: 'as_larionova@itmo.ru'
      }
    ]
  })
}
export default appModule