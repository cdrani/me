import { ICONS } from '../constants'

const getIcon = name => {
  let icon

  switch (name) {
    case 'twitter':
      icon = ICONS.TWITTER
      break
    case 'github':
      icon = ICONS.GITHUB
      break
    case 'email':
      icon = ICONS.EMAIL
      break
    case 'linkedin':
      icon = ICONS.LINKEDIN
      break
    case 'resume':
      icon = ICONS.RESUME
      break
    default:
      icon = {}
      break
  }

  return icon
}

export default getIcon
