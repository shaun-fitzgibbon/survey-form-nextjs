import { useForm, SubmitHandler } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

interface SurveryFormValues {
  firstname: string
  lastname: string
  email: string
  age: number
  gender: string
  serviceRate: string
  customerCare: boolean
  sales: boolean
  productQuality: boolean
  productRange: boolean
  productPricing: boolean
  deliveryLeadTimes: boolean
  comments: string
}

const SurveyForm = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SurveryFormValues>({
    mode: 'onBlur', // "onChange"
  })

  /* Handlers */
  const onSubmit: SubmitHandler<SurveryFormValues> = (data, event) =>
    alert(JSON.stringify(data))

  return (
    <>
      <form
        id='survey-form'
        className='form'
        autoComplete='off'
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='name-group'>
          <div className='form-group left'>
            <label id='name-label'>
              <p className='form-group__label'>First name</p>
              <input
                type='text'
                placeholder='Enter your first name'
                className='form-group__input'
                autoFocus
                {...register('firstname', { required: true, maxLength: 80 })}
              />
            </label>
            {errors.firstname && <p>First name is required</p>}
          </div>
          <div className='form-group right'>
            <label>
              <p className='form-group__label'>Last name</p>
              <input
                type='text'
                placeholder='Enter your last name'
                className='form-group__input'
                {...register('lastname', { required: true, maxLength: 100 })}
              />
            </label>
            {errors.lastname && <p>Last name is required</p>}
          </div>
        </div>
        <div className='form-group'>
          <label id='email-label'>
            <p className='form-group__label'>Email</p>
            <input
              type='email'
              placeholder='Enter your email'
              className='form-group__input'
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
          </label>
          {errors.email && <p>Email name is required</p>}
        </div>
        <div className='form-group'>
          <label id='number-label'>
            <p className='form-group__label'>Age (optional)</p>
            <input
              type='number'
              placeholder='age'
              className='form-group__input'
              min={1}
              max={130}
              {...register('age', { min: 1, maxLength: 130 })}
            />
          </label>
          {errors.age && <p>Age name is required</p>}
        </div>
        <div className='form-group'>
          <label>
            <p className='form-group__label'>Gender</p>

            <select
              {...register('gender', { required: true })}
              defaultValue={'default'}
              id='dropdown'
              className='form-group__input'
            >
              <option value='default' disabled hidden>
                Select an option
              </option>
              <option value='Female'>Female</option>
              <option value='Male'>Male</option>
              <option value='Non-binary'>Non-binary</option>
              <option value='Transgender'>Transgender</option>
              <option value='Intersex'>Intersex</option>
              <option value='I prefer not to say'>I prefer not to say</option>
            </select>
          </label>
          {errors.gender && <p>Gender is required</p>}
        </div>

        <div className='form-group'>
          <p className='form-group__label'>How would you rate our service?</p>
          <label className='radio'>
            <input
              {...register('serviceRate', { required: true })}
              className='radio__input'
              type='radio'
              value='Excellent'
            />
            <p className='radio__label'>Excellent</p>
          </label>

          <label className='radio'>
            <input
              {...register('serviceRate', { required: true })}
              className='radio__input'
              type='radio'
              value='Good'
            />
            <p className='radio__label'>Good</p>
          </label>

          <label className='radio'>
            <input
              {...register('serviceRate', { required: true })}
              className='radio__input'
              type='radio'
              value='Average'
            />
            <p className='radio__label'>Average</p>
          </label>

          <label className='radio'>
            <input
              {...register('serviceRate', { required: true })}
              className='radio__input'
              type='radio'
              value='Poor'
            />
            <p className='radio__label'>Poor</p>
          </label>

          <label className='radio'>
            <input
              {...register('serviceRate', { required: true })}
              className='radio__input'
              type='radio'
              value='Very poor'
            />
            <p className='radio__label'>Very Poor</p>
          </label>
          {errors.serviceRate && <p>This field is required</p>}
        </div>
        <div className='form-group'>
          <p className='form-group__label'>
            Please select the area’s you think we could improve
          </p>

          <label className='checkbox'>
            <input
              type='checkbox'
              placeholder='customerCare'
              className='checkbox__input'
              value='customer_care'
              {...register('customerCare', {})}
            />
            <span className='checkbox__custom'></span>
            <p className='checkbox__label'>Customer care</p>
          </label>

          <label className='checkbox'>
            <input
              type='checkbox'
              placeholder='sales'
              className='checkbox__input'
              value='sales'
              {...register('sales', {})}
            />
            <span className='checkbox__custom'></span>
            <p className='checkbox__label'>Sales</p>
          </label>

          <label className='checkbox'>
            <input
              type='checkbox'
              placeholder='customerCare'
              className='checkbox__input'
              value='product_quality'
              {...register('productQuality', {})}
            />
            <span className='checkbox__custom'></span>
            <p className='checkbox__label'>Product quality</p>
          </label>

          <label className='checkbox'>
            <input
              type='checkbox'
              placeholder='customerCare'
              className='checkbox__input'
              value='product_range'
              {...register('productRange', {})}
            />
            <span className='checkbox__custom'></span>
            <p className='checkbox__label'>Product range</p>
          </label>

          <label className='checkbox'>
            <input
              type='checkbox'
              placeholder='customerCare'
              className='checkbox__input'
              value='product_pricing'
              {...register('productPricing', {})}
            />
            <span className='checkbox__custom'></span>
            <p className='checkbox__label'>Product Pricing</p>
          </label>

          <label className='checkbox'>
            <input
              type='checkbox'
              placeholder='customerCare'
              className='checkbox__input'
              value='delivery_times'
              {...register('deliveryLeadTimes', {})}
            />
            <span className='checkbox__custom'></span>
            <p className='checkbox__label'>Delivery lead times</p>
          </label>
        </div>
        <div className='form-group'>
          <label>
            <p className='form-group__label'>Any comments or suggestions?</p>
            <textarea
              {...register('comments', { maxLength: 500 })}
              className='form-group__input'
              name='comments'
              placeholder='Enter your comment here...'
              rows={4}
              cols={50}
            ></textarea>
          </label>
          {errors.comments && (
            <p>Comment must be a maximum of 500 characters</p>
          )}
        </div>

        <input id='submit' className='btn' type='submit' value={'SUBMIT'} />
      </form>
      <DevTool control={control} />
    </>
  )
}

export default SurveyForm
