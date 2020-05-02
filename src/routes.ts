import { Request, Response } from 'express'

import createUser from './services/CreateUser'

export const helloWorld = (request: Request, response: Response) => {
  const user = createUser({
    name: '',
    email: 'vitorgpalves@gmail.com',
    password: '123456',
    techs: ['Node.js', 'ReactJS', 'React Native'],
    repositories: [
      'My React repository',
      {
        title: 'Mobile with React Native',
        url: 'https://github.com/vitorgiovane/gostack11-mobile-with-react-native'
      },
      'dfdf'
    ]
  })

  return response.json({ user })
}
