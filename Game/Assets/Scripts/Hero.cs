using UnityEngine;
using UnityEngine.SceneManagement;


#region Animation Enum
public enum States// ������ 
{
    idle,
    run,
    jump,
}
#endregion

public class Hero : MonoBehaviour
{
    #region Parametr Person
    [SerializeField] private float speed = 3f;// �������� ��������
    [SerializeField] private int lives = 3;// ���������� ������
    [SerializeField] private float jumpForse = 8f;// ���� ������
    #endregion

    public Joystick joystick;

    #region Check Ground
    [SerializeField] private bool isGrounded = false;
    [SerializeField] private Transform grondCheck;
    [SerializeField] public float groundRadius = 0.2f;
    public LayerMask WhatIsGround;
    #endregion

    private Rigidbody2D rb;
    private Animator anim; // ���� ���� ��������
    private SpriteRenderer sprite;

    public static Hero Instance { get; set; }

    #region Animation
    private States State
    {
        get { return (States)anim.GetInteger("state"); } // �������� �������� ����� �� ���������
        set { anim.SetInteger("state", (int)value); } // ������ ��� ��������
    }
    #endregion

    private void Awake()
    {
        Instance = this;
        rb = GetComponent<Rigidbody2D>();
        anim = GetComponent<Animator>(); // �������� ������ �� ��������� ����
        sprite = GetComponentInChildren<SpriteRenderer>();

    }
    private void FixedUpdate()
    {
        CheckGround();
    }

    #region Check Do
    private void Update()
    {
        if (isGrounded) State = States.idle; // ����� �� �� �� ����� ( ���� ����� �� �������� idle)

        if (joystick.Horizontal != 0)
            Run();
        if (isGrounded && joystick.Vertical > 0.5f)
            Jump();
    }
    #endregion

    #region Run
    private void Run()
    {
        if (isGrounded) State = States.run; // �������� ����� ��

        Vector3 dir = transform.right * joystick.Horizontal;
        transform.position = Vector3.MoveTowards(transform.position, transform.position + dir, (speed * Time.deltaTime) * 1.5f);
        sprite.flipX = dir.x < 0.0f;
    }
    #endregion

    #region Jump
    private void Jump()
    {
        rb.velocity = Vector2.up * jumpForse;

    }
    #endregion


    #region isGround
    private void CheckGround()
    {
        isGrounded = Physics2D.OverlapCircle(grondCheck.position, groundRadius, WhatIsGround);

        if (!isGrounded) State = States.jump; // ���� �� �������� �����, �� �������� ������
    }
    #endregion


    #region GetDamage
    public void GetDamage(int damage)
    {
        lives -= damage;
        Debug.Log("� ����� "+lives);
        if (lives < 1)
        {
            Destroy(this.gameObject);
            SceneManager.LoadScene("SampleScene");
        }
    }
    #endregion


    #region hasPlatform
    private void OnCollisionStay2D(Collision2D collision)
    {
        if (collision.gameObject.tag.Equals("platform"))
            this.transform.parent = collision.transform;
        if (!collision.gameObject.tag.Equals("platform"))
            this.transform.parent = null;
    }
    #endregion

}
