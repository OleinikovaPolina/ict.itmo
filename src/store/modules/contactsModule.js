const appModule = {
  namespaced: true,
  state: () => ({
    dean: {
      img: require('../../assets/images/people/137820.jpg'),
      name: 'Капитонов Александр Александрович',
      position: 'Декан факультета',
      email: '137820@itmo.ru',
      tel: '+7 (812) 457-15-35'
    },
    contacts:[
      {
        img: require('../../assets/images/people/arsenieva.3be2db26674e.jpg'),
        name: 'Арсеньева Анна Закировна',
        position: 'Заместитель декана по учебному процессу',
        email: '164661@itmo.ru'
      },
      {
        img: require('../../assets/images/people/p1336.jpg'),
        name: 'Башкина Ирина Александровна',
        position: 'Помощник декана',
        email: '245011@itmo.ru'
      },
      {
        img: require('../../assets/images/people/pavlovich.eb74b9efcb8b.jpg'),
        name: 'Павлович Яна Александровна',
        position: 'Менеджер по связям с общественностью',
        email: '344229@itmo.ru'
      },
      {
        img: require('../../assets/images/people/184402.jpg'),
        name: 'Кузнецов Павел Александрович',
        position: 'Ответственный за прием абитуриентов, куратор практики',
        email: '184402@itmo.ru'
      }
    ],
    office:[
      {
        img: require('../../assets/images/people/246011.png'),
        name: 'Деркунская Светлана',
        position: 'Менеджер',
        email: '246011@itmo.ru'
      },
      {
        img: require('../../assets/images/people/larionova.44c52f8797e2.jpg'),
        name: 'Ларионова Александра Сергеевна',
        position: 'Менеджер',
        email: '345154@itmo.ru'
      },
      {
        name: 'Наталья Владимировна Монахова',
        position: 'Руководитель учебного офиса',
        email: '118988@itmo.ru'
      },
      {
        name: 'Говорова Марина Михайловна',
        position: 'Менеджер',
        email: '105760@itmo.ru'
      }
    ]
  })
}
export default appModule