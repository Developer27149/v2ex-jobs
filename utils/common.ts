export const waitAMoment = async (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}

export const makeTaskSlow = async <T>(
  promise: Promise<T>,
  time: number = 1000
) => {
  return Promise.all([promise, waitAMoment(time)]).then((res) => res[0] as T)
}

// get random tailwindcss color
export const getRandomColor = (index: number) => {
  const colors = [
    "purple",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "indigo",
    "red",
    "pink"
  ]
  return `bg-${colors[index % colors.length]}-500`
}

export function convertCoverToSpan(str: string): string {
  return str
    .replace(/\[([^\]]+)\]/g, '<span class="text-[#dc4758]">【$1】</span>')
    .replace(/【([^\]]+)9】/g, '<span class="text-[#dc4758]">【$1】</span>')
}
