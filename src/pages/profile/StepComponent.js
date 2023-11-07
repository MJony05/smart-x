import Image from 'next/image';
import React from 'react';
import styles from './step.module.css';
function StepProgress() {
  const steps = Array.from({ length: 310 }, (_, i) => i + 1);
  const rowsNumber = Array.from({ length: 310 / 5 }, (_, i) => i + 1);
  return (
    <div className={styles.gameBoard}>
      {rowsNumber.map((row, rowIndex) => {
        const rowSteps = steps.slice(rowIndex * 5, rowIndex * 5 + 5);
        if (rowIndex % 2 !== 0) {
          rowSteps.reverse();
        }
        return (
          <div key={row} className={styles.row}>
            {rowSteps.map((step, i) => (
              <>
                <div className={styles.step} key={step}>
                  <div className={styles.stepImageBox}>
                    <Image
                      src="/step-card.png"
                      alt={`Step ${step}`}
                      width={150}
                      height={200}
                    />
                    <span>{step}-qadam</span>
                    {(i + 1) % 5 === 0 && rowIndex % 2 === 0 && (
                      <div className={styles.verticalImages}>
                        <Image
                          src="/step.png"
                          alt="Step image"
                          width={20}
                          height={20}
                        />
                        <Image
                          src="/step.png"
                          alt="Step image"
                          width={20}
                          height={20}
                        />
                      </div>
                    )}
                    {(i + 1) % 5 === 1 && rowIndex % 2 === 1 && (
                      <div className={styles.verticalImages}>
                        <Image
                          src="/step.png"
                          alt="Step image"
                          width={20}
                          height={20}
                        />
                        <Image
                          src="/step.png"
                          alt="Step image"
                          width={20}
                          height={20}
                        />
                      </div>
                    )}
                  </div>
                </div>
                {(i + 1) % 5 !== 0 && (
                  <div
                    className={rowIndex % 2 !== 0 ? styles.reverseImage : ''}
                  >
                    <Image
                      src="/step.png"
                      alt="Step image"
                      width={20}
                      height={20}
                    />
                    <Image
                      src="/step.png"
                      alt="Step image"
                      width={20}
                      height={20}
                    />
                    <Image
                      src="/step.png"
                      alt="Step image"
                      width={20}
                      height={20}
                    />
                    <Image
                      src="/step.png"
                      alt="Step image"
                      width={20}
                      height={20}
                    />
                  </div>
                )}
              </>
            ))}
          </div>
        );
      })}
    </div>
  );
}

// {squares.map((step, index) => (
//   <React.Fragment key={step}>
//     <div className="step">
//       <Image
//         src={'/step-card.png'}
//         alt={'step.text'}
//         width={150}
//         height={200}
//       />
//       <span>{step} - qadam</span>
//       {step.isCompleted && (
//         <Image src="/tick.png" alt="Completed" width={200} height={200} />
//       )}
//     </div>
//     {index < squares.length - 1 && (
//       <>
//         <Image src="/step.png" alt="Step image" width={20} height={20} />
//         <Image src="/step.png" alt="Step image" width={20} height={20} />
//       </>
//     )}
//   </React.Fragment>
// ))}
export default StepProgress;
