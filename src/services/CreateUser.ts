interface RepositoryObject {
  title: string,
  url: string
}

interface CreateUserData {
  name?: string,
  email: string,
  password: string,
  techs: string[],
  repositories: Array<string | RepositoryObject>
}

const createUser = ({ name = '', email, password, techs, repositories }: CreateUserData) => {
  return {
    name,
    email,
    password,
    techs,
    repositories
  }
}

export default createUser
