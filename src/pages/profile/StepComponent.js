import Image from 'next/image';
import React from 'react';
import styles from './step.module.css';
import { Pagination } from '@mui/material';
function StepProgress(props) {
  const { completed } = props;
  const steps = Array.from({ length: 310 }, (_, i) => i + 1);
  const rowsNumber = Array.from({ length: 30 / 5 }, (_, i) => i + 1);
  const rowsNumberPhone = Array.from({ length: 30 / 2 }, (_, i) => i + 1);
  const [currentPage, setCurrentPage] = React.useState(1);
  const stepsPerPage = 30;
  const startIndex = (currentPage - 1) * stepsPerPage;
  const endIndex = startIndex + stepsPerPage;
  const rowStepsPart = steps.slice(startIndex, endIndex);
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <div className={styles.mapContainer}>
      <Pagination
        size="medium"
        className={styles.pagination}
        count={11}
        page={currentPage}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
      <div className={`${styles.forPhone} ${styles.gameBoard} `}>
        {rowsNumberPhone.map((row, rowIndex) => {
          const rowSteps = rowStepsPart.slice(rowIndex * 2, rowIndex * 2 + 2);
          if (rowIndex % 2 !== 0) {
            rowSteps.reverse();
          }

          return (
            <div key={row}>
              <div className={styles.row}>
                {rowSteps.map((step, i) => (
                  <React.Fragment key={step}>
                    <div className={styles.step}>
                      <div className={styles.stepImageBox}>
                        <Image
                          src="/step-card.png"
                          alt={`Step ${step}`}
                          width={130}
                          height={185}
                        />
                        {step <= completed && (
                          <Image
                            src="/checked.png"
                            alt="Completed"
                            width={130}
                            height={130}
                            style={{ position: 'absolute', top: 0, right: 0 }}
                          />
                        )}
                        <span>{step}-qadam</span>
                        {(i + 1) % 2 === 0 && rowIndex % 2 === 0 && (
                          <div className={styles.verticalImages}>
                            <Image
                              src="/step.png"
                              alt="Step image"
                              width={40}
                              height={28.7}
                            />
                            <Image
                              src="/step.png"
                              alt="Step image"
                              width={40}
                              height={28.7}
                            />
                          </div>
                        )}
                        {(i + 1) % 2 === 1 && rowIndex % 2 === 1 && (
                          <div className={styles.verticalImages}>
                            <Image
                              src="/step.png"
                              alt="Step image"
                              width={40}
                              height={28.7}
                            />
                            <Image
                              src="/step.png"
                              alt="Step image"
                              width={40}
                              height={28.7}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    {(i + 1) % 2 !== 0 && (
                      <div
                        className={
                          rowIndex % 2 !== 0
                            ? styles.reverseImage
                            : styles.stepsBox
                        }
                      >
                        <Image
                          src="/step.png"
                          style={{ objectFit: 'contain' }}
                          alt="Step image"
                          width={40}
                          height={28.7}
                          className={styles.topImage}
                        />
                        <Image
                          src="/step.png"
                          style={{ objectFit: 'contain' }}
                          alt="Step image"
                          width={40}
                          height={28.7}
                          className={styles.bottomImage}
                        />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              {rowSteps[1] === 310 ? (
                <div className={styles.finishImages}>
                  <Image
                    className={styles.cupImage}
                    src={'/cup.png'}
                    alt="flag image"
                    width={200}
                    height={300}
                  />
                  <Image
                    src={'/finish.png'}
                    alt="flag image"
                    width={150}
                    height={150}
                  />
                </div>
              ) : (
                ''
              )}
            </div>
          );
        })}
      </div>
      <div className={`${styles.gameBoard} ${styles.forDesktop}`}>
        {rowsNumber.map((row, rowIndex) => {
          const rowSteps = rowStepsPart.slice(rowIndex * 5, rowIndex * 5 + 5);
          if (rowIndex % 2 !== 0) {
            rowSteps.reverse();
          }

          return (
            <div key={row}>
              <div className={styles.row}>
                {rowSteps.map((step, i) => (
                  <React.Fragment key={step}>
                    <div className={styles.step}>
                      <div className={styles.stepImageBox}>
                        <Image
                          src="/step-card.png"
                          alt={`Step ${step}`}
                          width={130}
                          height={185}
                        />
                        {step <= completed && (
                          <Image
                            src="/checked.png"
                            alt="Completed"
                            width={130}
                            height={130}
                            style={{ position: 'absolute', top: 0, right: 0 }}
                          />
                        )}
                        <span>{step}-qadam</span>
                        {(i + 1) % 5 === 0 && rowIndex % 2 === 0 && (
                          <div className={styles.verticalImages}>
                            <Image
                              src="/step.png"
                              alt="Step image"
                              width={40}
                              height={28.7}
                            />
                            <Image
                              src="/step.png"
                              alt="Step image"
                              width={40}
                              height={28.7}
                            />
                          </div>
                        )}
                        {(i + 1) % 5 === 1 && rowIndex % 2 === 1 && (
                          <div className={styles.verticalImages}>
                            <Image
                              src="/step.png"
                              alt="Step image"
                              width={40}
                              height={28.7}
                            />
                            <Image
                              src="/step.png"
                              alt="Step image"
                              width={40}
                              height={28.7}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    {(i + 1) % 5 !== 0 && (
                      <div
                        className={
                          rowIndex % 2 !== 0
                            ? styles.reverseImage
                            : styles.stepsBox
                        }
                      >
                        <Image
                          src="/step.png"
                          style={{ objectFit: 'contain' }}
                          alt="Step image"
                          width={40}
                          height={28.7}
                          className={styles.topImage}
                        />
                        <Image
                          src="/step.png"
                          style={{ objectFit: 'contain' }}
                          alt="Step image"
                          width={40}
                          height={28.7}
                          className={styles.bottomImage}
                        />
                        <Image
                          src="/step.png"
                          style={{ objectFit: 'contain' }}
                          alt="Step image"
                          width={40}
                          height={28.7}
                          className={styles.topImage}
                        />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              {rowSteps[1] == 309 ? (
                <div className={styles.finishImagesDesktop}>
                  <Image
                    src={'/finish.png'}
                    alt="flag image"
                    width={150}
                    height={150}
                  />
                  <Image
                    className={styles.cupImageDesktop}
                    src={'/cup.png'}
                    alt="flag image"
                    width={300}
                    height={600}
                  />
                </div>
              ) : (
                ''
              )}
            </div>
          );
        })}
      </div>
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
//         <Image src="/step.png" style={{objectFit:'cover'}} alt="Step image" width={20} height={20} />
//         <Image src="/step.png" style={{objectFit:'cover'}} alt="Step image" width={20} height={20} />
//       </>
//     )}
//   </React.Fragment>
// ))}
export default StepProgress;
