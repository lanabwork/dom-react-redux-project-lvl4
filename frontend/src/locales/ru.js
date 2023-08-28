const ru = {
  translation: {
    loginPage: {
      header: 'Войти',
      footer: 'Нет аккаунта?',
      signUpLink: 'Регистрация'
    },
    loginForm: {
      username: 'Ваш ник',
      password: 'Пароль',
      submitButton: 'Войти',
      error: 'Неверные имя пользователя или пароль'
    },
    signUpPage: {
      header: 'Регистрация',
      footer: 'Есть аккаунт?',
      loginLink: 'Авторизация'
    },
    signUpForm: {
      username: 'Имя пользователя',
      password: 'Пароль',
      confirmPassword: 'Подтвердите пароль',
      submitButton: 'Зарегистрироваться',
      errors: {
        usernameNotUnique: 'Такой пользователь уже существует',
        unknownError: 'Ошибка при обработке запроса'
      }
    },
    validationMessage: {
      required: 'Обязательное поле',
      confirmPassword: 'Пароли должны совпадать',
      minMax_one: 'От {{min}} до {{max}} символов',
      minMax_few: 'От {{min}} до {{max}} символов',
      minMax_many: 'От {{min}} до {{max}} символов',
      min_one: 'Не менее {{count}} символ',
      min_few: 'Не менее {{count}} символа',
      min_many: 'Не менее {{count}} символов',
      max_one: 'Максимально {{count}} символ',
      max_few: 'Максимально {{count}} символа',
      max_many: 'Максимально {{count}} символов',
    },
    messages: {
      text: 'Введите сообщение...',
      label_one: '{{count}} сообщение',
      label_few: '{{count}} сообщения',
      label_many: '{{count}} сообщений',
    },
    logoutButton: 'Выйти',
    channelsHeader: 'Каналы',
    channelDropdownMenu: {
      remove: 'Удалить',
      rename: 'Переименовать'
    },
    NotFoundPage: {
      header: 'Страница не найдена',
      linkMainPage: 'Но вы можете перейти <1>на главную страницу</1>'
    },
    modals: {
      addChannel: {
        header: 'Добавить канал',
        name: 'Имя канала',
        buttons: {
          submit: 'Отправить',
          cancel: 'Отменить'
        },
        messages: {
          success: 'Канал создан',
          errors: {
            isExist: 'Канал с таким именем уже существует'
          }
        }
      },
      removeChannel: {
        header: 'Удалить канал',
        body: 'Уверены?',
        buttons: {
          submit: 'Удалить',
          cancel: 'Отменить'
        },
        messages: {
          success: 'Канал удалён'
        }
      },
      renameChannel: {
        header: 'Переименовать канал',
        name: 'Имя канала',
        buttons: {
          submit: 'Отправить',
          cancel: 'Отменить'
        },
        messages: {
          success: 'Канал переименован',
          errors: {
            isExist: 'Должно быть уникальным'
          }
        }
      }
    },
    notifications: {
      commonError: 'Ошибка соединения'
    }
  }
};

export default ru;
