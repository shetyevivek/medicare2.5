import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/solid'

const Formtype = [
  { id: 1, title: 'Medicare', key: 'medicare', description: 'I am Over 65' },
  { id: 2, title: 'HealthCare', key: 'healthcare', description: 'I am Under 65' },

]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function listenClick() {

  console.log('click')
}


export default function LandingPageCheckBox() {


  const [selectedQuote, setSelectedQuote] = useState(Formtype[0])


  return (
    <RadioGroup value={selectedQuote} onChange={setSelectedQuote}>
      <RadioGroup.Label className="text-base font-medium text-gray-900">Select Quote Type</RadioGroup.Label>

      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
        {Formtype.map((Formtype) => (
          <RadioGroup.Option
            key={Formtype.id}
            id='radio'
            onClick={listenClick()}
            value={Formtype}
            className={({ checked, active }) =>
              classNames(
                checked ? 'border-transparent' : 'border-gray-300',
                active ? 'border-blue-500 ring-2 ring-blue-500' : '',
                'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none'
              )
            }
          >
            {({ checked, active }) => (
              <>

                <div className="flex-1 flex">
                  <div className="flex flex-col">
                    <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900" key={Formtype.key}>
                      {Formtype.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description as="span" className="mt-1 flex items-center text-sm text-gray-500">
                      {Formtype.description}
                    </RadioGroup.Description>

                  </div>
                </div>
                <CheckCircleIcon
                  className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-blue-300')}
                  aria-hidden="true"
                />
                <div
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-blue-500' : 'border-transparent',
                    'absolute -inset-px rounded-lg pointer-events-none'
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}

