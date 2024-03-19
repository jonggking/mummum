// import React, { memo } from 'react';
// import Calendar from 'react-calendar';

// const DatePicker: React.FC<ButtonProps> = ({
//     text,
//     isLoading,
//     children,
//     color = 'BLUE',
//     disabled = false,
//     ...props
//   }) => (<ChevronBackOutline height='32px' width='32px' />
// <S.Date>2024-01-26</S.Date>
// <ChevronForwardOutline height='32px' width='32px' />

//   );
// export interface DatePickerProps {
//     isOpen?: boolean;
//     onClose: () => void;
//     onChange: (value: Date) => void;
//     value?: Date;
//     minDate?: Date;
//     maxDate?: Date;
//   }

// export const DatePicker = memo<DatePickerProps>((props) => {
//   const { isOpen, onClose } = props;

//   if (!isOpen) {
//     return null;
//   }

//   return (
//     <ClickOutsideWrapper
//       useCapture={true}
//       includeButtonPress={false}
//       onClick={onClose}
//     >
//       <div className={styles.modal} data-testid='date-picker'>
//         <Body {...props} />
//       </div>
//     </ClickOutsideWrapper>
//   );
// });

// export default DatePicker;
