const variants = [
  {
    name: 'Design Version',
    data: {
      title: 'Easily create or join a local nanny share with Hapu',
      description:
        'Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.',
    },
  },
  {
    name: 'Alternate Version',
    data: {
      title: 'Create the childcare you need at a price you can afford',
      description:
        'Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.',
    },
  },
]

const getRandomVariant = () => {
  const randomIndex = Math.round(Math.random())

  return variants[randomIndex]
}

export default getRandomVariant
