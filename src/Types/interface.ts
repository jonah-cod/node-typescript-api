export interface Task{
      id: number,
      title: string,
      completed: boolean
}

export interface signUpUser{
      full_name: string,
      email: string,
      password: string
}

export interface loginUser{
      email: string,
      password: string
}