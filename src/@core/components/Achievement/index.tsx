import { FC } from 'react'
import './style.scss'
import { useLang } from '@/@core/service/hooks/useLang'

export const Achievements: FC = () => {
  const { t } = useLang()

  return (
    <section className='achievements d-flex justify-evenly'>
      <div className='title-wrapper'>
        <h1 className='achievements-title'>{t('achievements-title')}</h1>
        <p>{t('achievements-pretitle')}</p>
      </div>
      <div className='box-wrapper'>
        <div className='box-item d-flex align-center gap-x-1'>
          <img src='/assets/achievements/IconUsers.svg' alt='svg' />
          <div>
            <h1>1000,000+</h1>
            <p>{t('users')}</p>
          </div>
        </div>
        <div className='box-item d-flex align-center gap-x-1'>
          <img src='/assets/achievements/IconUser2.svg' alt='svg' />
          <div>
            <h1>18 лет вместе</h1>
            <p>{t('users')}</p>
          </div>
        </div>
        <div className='box-item d-flex align-center gap-x-1'>
          <img src='/assets/achievements/IconService.svg' alt='svg' />
          <div>
            <h1>15+</h1>
            <p>{t('users')}</p>
          </div>
        </div>
        <div className='box-item d-flex align-center gap-x-1'>
          <img src='/assets/achievements/IconUser3.svg' alt='svg' />
          <div>
            <h1>1000,000+</h1>
            <p>{t('users')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}