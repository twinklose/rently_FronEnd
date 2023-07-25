import PropertyCard from '../../components/organisms/PropertyCard.tsx'
import FormikTextField from '../../components/molecules/core/FormikTextField.tsx'
import FormikSelect from '../../components/molecules/core/FormikSelect.tsx'
import { FormikProvider, useFormik } from 'formik'
import Heart from '../../components/atoms/icons/Heart.tsx'
import FormikCheckbox from '../../components/molecules/core/FormikCheckbox.tsx'

export default function Playground(): JSX.Element {
  const initialValues = {
    test1: '',
    test2: false,
    test3: '',
  }

  const handleSubmit = (values: any) => {
    console.log(values)
  }

  const form = useFormik({
    initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: handleSubmit,
  })

  const options = [
    { label: 'test', value: 'test' },
    { label: 'test2', value: 'test2' },
  ]

  console.log(form.values)

  return (
    <>
      <FormikProvider value={form}>
        <FormikTextField
          name='test1'
          placeholder='testing formik textfield'
          icon={<Heart color />}
        />
        <FormikSelect name='test3' options={options} />
        <div className='flex justify-between align-middle flex-wrap'>
          <FormikCheckbox name='test2' label='test2' />
          <FormikCheckbox name='test2' label='test2' />
          <FormikCheckbox name='test2' label='test2' />
          <FormikCheckbox name='test2' label='test2' />
          <FormikCheckbox name='test2' label='test2' />
          <FormikCheckbox name='test2' label='test2' />
        </div>
        <PropertyCard />
      </FormikProvider>
    </>
  )
}
